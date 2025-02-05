'use client'

import { useGetUsersQuery } from '@/state/api'
import { useAppSelector } from '../redux'
import Header from '@/components/Header'
import Image from 'next/image'
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid"
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils"

function CustomToolbar() {
  <GridToolbarContainer className='toolbar flex gap-2'>
    <GridToolbarFilterButton />   
    <GridToolbarExport />
  </GridToolbarContainer>
}

const columns: GridColDef[] = [
  {field: 'userId', headerName: 'ID', width: 100},
  {field: 'userName', headerName: 'Username', width: 105},
  {
    field: 'profilePictureUrl',
    headerName: 'Profile Picture',
    width: 100,
    renderCell: (params) => (
      <div className='flex h-full w-full items-center justify-center'>
        <div className='h-9 w-9'>
          <Image
            src={`todo/${params.value}`}
            alt={params.row.userName}
            width={100}
            height={50}
            className='h-full rounded-full object-cover'
          />
        </div>
      </div>
    )
  }
]

export default function Users() {
  const { data: users, isLoading, isError } = useGetUsersQuery()
  const isDarkMode = useAppSelector(state => state.global.isDarkMode)

  if (isLoading) return <div>Loading...</div>
  if (isError || !users) return <div>Error fetching projects</div>

  return (
    <div className='flex w-full flex-col p-8'>
      <Header name='Users' />
      <div style={{ height: 650, width: '100%' }}>
        <DataGrid
          rows={users || []}
          columns={columns}
          getRowId={row => row.userId}
          pagination
          slots={{ toolbar: CustomToolbar }}
          className={dataGridClassNames}
          sx={dataGridSxStyles(isDarkMode)}
        />
      </div>
    </div>
  )
}
