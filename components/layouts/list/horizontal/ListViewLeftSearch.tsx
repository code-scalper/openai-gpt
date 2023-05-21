import { Input, Button } from '@/components'
const ListViewLeftSearch = () => {
  return (
    <div className='p-2 h-full flex flex-col'>
      <p>Horizontal List View</p>
      <div className='mt-5 flex-grow flex flex-col justify-between'>
        <div className='overflow-hidden overflow-y-auto flex-grow'>
          <div className='mt-3'>
            <Input label='label1' horizontal={true} />
          </div>
          <div className='mt-3'>
            <Input label='label1' horizontal={true} />
          </div>
          <div className='mt-3'>
            <Input label='label1' horizontal={true} />
          </div>
          <div className='mt-3'>
            <Input label='label1' horizontal={true} />
          </div>
          <div className='mt-3'>
            <Input label='label1' horizontal={true} />
          </div>
          <div className='mt-3'>
            <Input label='label1' horizontal={true} />
          </div>
        </div>
        <div className=''>
          {/* antd button is not working properly with icons */}
          <Button
            label='search'
            className='text-white bg-theme-primary'
            // handleClick={enterLoading}
          />
        </div>
      </div>
    </div>
  )
}

export default ListViewLeftSearch
