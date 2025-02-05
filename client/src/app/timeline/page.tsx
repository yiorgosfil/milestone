'use client'

import Header from "@/components/Header"
import { useAppSelector } from '@/app/redux'
import { useGetProjectsQuery } from "@/state/api"
import { useMemo, useState } from "react"
import { DisplayOption, Gantt, ViewMode } from "gantt-task-react"
import "gantt-task-react/dist/index.css"

type TaskTypeItems = 'task' | 'milestone' | 'project'

export default function Timeline() {
  const isDarkMode = useAppSelector(state => state.global.isDarkMode)
  const { data: projects, isLoading, isError } = useGetProjectsQuery()

  const [displayOptions, setDisplayOptions] = useState<DisplayOption>({
    viewMode: ViewMode.month,
    locale: 'en-US'
  })

  /* `useMemo` transforms the `projects` array into `ganttTasks`, which
    * follows a specific format needed for a Gantt chart.
    * The mapping operation runs only when `projects` changes.
  */
  const ganttTasks = useMemo(() => {
    return (
      projects?.map(project => ({
        start: new Date(project.startDate as string),
        due: new Date(project.dueDate as string),
        name: project.name,
        id: `Project-${project.id}`,
        type: 'project' as TaskTypeItems,
        progress: 50,
        isDisabled: false,
      })) || []
    )
  }, [projects])

  const handleViewModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplayOptions(prev => ({
      ...prev,
      viewMode: e.target.value as ViewMode
    }))
  }

  if (isLoading) return <div>Loading...</div>
  if (isError || !projects) return <div>Error fetching projects</div>

  return (
    <div className="max-w-full p-8">
      <header className="mb-4 flex items-center justify-between">
        <Header name="Projects Timeline" />
        <div className="relative inline-block w-64">
          <select
            className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none dark:border-dark-secondary dark:bg-dark-secondary dark:text-white"
            value={displayOptions.viewMode}
            onChange={handleViewModeChange}
          >
            <option value={ViewMode.Day}>Day</option>
            <option value={ViewMode.Week}>Week</option>
            <option value={ViewMode.Month}>Month</option>
          </select>
        </div>
      </header>

      <div className="overflow-hidden rounded-md bg-white shadow dark:bg-dark-secondary dark:text-white">
        <div className="timeline">
          <Gantt
            tasks={ganttTasks}
            {...displayOptions}
            columnWidth={displayOptions.viewMode === ViewMode.Month ? 150 : 100}
            listCellWidth="100px"
            projectBackgroundColor={isDarkMode ? "#101214" : "#1f2937"}
            projectProgressColor={isDarkMode ? "#1f2937" : "#aeb8c2"}
            projectProgressSelectedColor={isDarkMode ? "#000" : "#9ba1a6"}
          />
        </div>
      </div>
    </div>
  )
}
