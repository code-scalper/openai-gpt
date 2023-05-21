import React, { useMemo } from 'react'
import { _listViewWrapper } from './_horizontal_style'
import ListViewLeftSearch from './ListViewLeftSearch'
import ListViewList from './ListViewList'
import ListViewContent from './ListViewContent'
import { useListRecoilState } from '@/lib/hooks'

const listHeader = [
  { label: 'Writer', key: 'col1', width: 100, role: 'writer' },
  { label: 'Content', key: 'col2', width: 100, role: 'content' },
  { label: 'Subject', key: 'col3', width: 100, role: 'subject' },
  { label: 'Register Date', key: 'col4', width: 100, role: 'time' },
  { label: 'ETC', key: 'col5', width: 100, role: 'any' },
  { label: 'ETC2', key: 'col6', width: 100, role: 'any' }
]
const items = [
  {
    col1: 'junwoo lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'test subject 1',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'jongwon lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'waht a wonderful world',
    col4: 'sdasd',
    col5: '2022-02-17'
  },
  {
    col1: 'junwoo lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'test subject 1',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'jongwon lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'waht a wonderful world',
    col4: 'sdasd',
    col5: '2022-02-17'
  },
  {
    col1: 'junwoo lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'test subject 1',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'jongwon lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'waht a wonderful world',
    col4: 'sdasd',
    col5: '2022-02-17'
  },
  {
    col1: 'junwoo lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'test subject 1',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'jongwon lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'waht a wonderful world',
    col4: 'sdasd',
    col5: '2022-02-17'
  },
  {
    col1: 'junwoo lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'test subject 1',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'jongwon lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'waht a wonderful world',
    col4: 'sdasd',
    col5: '2022-02-17'
  },
  {
    col1: 'junwoo lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'test subject 1',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'jongwon lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'waht a wonderful world',
    col4: 'sdasd',
    col5: '2022-02-17'
  },
  {
    col1: 'junwoo lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'test subject 1',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'jongwon lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'waht a wonderful world',
    col4: 'sdasd',
    col5: '2022-02-17'
  },
  {
    col1: 'junwoo lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'test subject 1',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'jongwon lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'waht a wonderful world',
    col4: 'sdasd',
    col5: '2022-02-17'
  },
  {
    col1: 'junwoo lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'test subject 1',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'jongwon lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'waht a wonderful world',
    col4: 'sdasd',
    col5: '2022-02-17'
  },
  {
    col1: 'junwoo lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'test subject 1',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'jongwon lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'waht a wonderful world',
    col4: 'sdasd',
    col5: '2022-02-17'
  },
  {
    col1: 'junwoo lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'test subject 1',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'jongwon lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'waht a wonderful world',
    col4: 'sdasd',
    col5: '2022-02-17'
  },
  {
    col1: 'junwoo lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'test subject 1',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'jongwon lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'waht a wonderful world',
    col4: 'sdasd',
    col5: '2022-02-17'
  },
  {
    col1: 'junwoo lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'test subject 1',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'jongwon lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'waht a wonderful world',
    col4: 'sdasd',
    col5: '2022-02-17'
  },
  {
    col1: 'junwoo lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'test subject 1',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'jongwon lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'waht a wonderful world',
    col4: 'sdasd',
    col5: '2022-02-17'
  },
  {
    col1: 'junwoo lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'test subject 1',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'jongwon lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'waht a wonderful world',
    col4: 'sdasd',
    col5: '2022-02-17'
  },
  {
    col1: 'junwoo lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'test subject 1',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'namgyu han',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'it s test subject 2',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'suin lee',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'this is sample page subject',
    col4: '2022-02-18',
    col5: 'asdvv',
    col6: 'asdnmandmasd'
  },
  {
    col1: 'tina aliautsina',
    col2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    col3: 'do you want to go for zzambbong',
    col4: '2022-02-18',
    col5: 'asdvv'
  }
]
const ListView = () => {
  const { listState } = useListRecoilState()
  const item = useMemo(() => {
    if (listState.selectedItemIndex < 0) {
      return null
    } else {
      return items[listState.selectedItemIndex]
    }
  }, [listState.selectedItemIndex])

  return (
    <div className={_listViewWrapper}>
      <div className='col-span-2'>
        <ListViewLeftSearch />
      </div>
      <div className='col-span-3 overflow-hidden'>
        <ListViewList items={items} listHeader={listHeader} />
      </div>
      <div className='col-span-5 overflow-hidden'>
        <ListViewContent
          item={item}
          selectedMatchValue={listState.selectedMatchValue}
          listHeader={listHeader}
        />
      </div>
    </div>
  )
}

export default ListView
