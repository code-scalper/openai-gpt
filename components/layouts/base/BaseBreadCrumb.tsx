import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Icon from '@/components/ui/icons'
import Link from 'next/link'
import classNames from 'classnames'
import { useMenuRecoilState } from '@/lib/hooks'
import { CrumbItemsInterface } from './utils/_base_interfaces'

const BaseBreadCrumb: React.FC = () => {
  const { menuState } = useMenuRecoilState()
  const router = useRouter()
  const [crumbItems, setCrumbItems] = useState<CrumbItemsInterface[]>([])
  useEffect(() => {
    const paths = router.asPath.split('/')
    const crumbArrays: CrumbItemsInterface[] = []
    const makeParam = ({ href, label }: CrumbItemsInterface) => {
      return { href, label }
    }
    paths.forEach((path, pathIndex) => {
      menuState.currentList.forEach((li: any) => {
        const href = `/${path}`
        if (li.href === href) {
          crumbArrays.push(makeParam(li))
        }
        if (li.expand === true) {
          li.children.forEach((child: any) => {
            if (child.href === href) {
              crumbArrays.push(makeParam(child))
            }
          })
        }
      })
      setCrumbItems(crumbArrays)
    })
  }, [menuState.currentList, router.asPath])

  return (
    <div className='p-2 text-xs border-b w-full border-theme-border-primary '>
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        {crumbItems.map((item, index) => (
          <li className='inline-flex items-center' key={index}>
            <Link
              href={item.href}
              className='inline-flex items-center text-xs font-medium text-gray-700 hover:text-blue-600 '
            >
              {index === 0 ? (
                <Icon
                  name='HomeIcon'
                  color='#fff'
                  size='xs'
                  className='w-4 h-4'
                />
              ) : (
                <Icon
                  name='ChevronRightIcon'
                  color='#fff'
                  size='xs'
                  className='w-4 h-4'
                />
              )}
              <span
                className={classNames('ml-5', {
                  'font-bold': index === crumbItems.length - 1
                })}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

BaseBreadCrumb.propTypes = {}

export default BaseBreadCrumb
