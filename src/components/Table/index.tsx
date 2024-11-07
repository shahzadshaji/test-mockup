import classNames from 'classnames'
import React from 'react'
import type {ReactNode, ComponentProps} from 'react'

export function TableActionContainer(props: {children: ReactNode}) {
  return <div className="flex items-center">{props.children}</div>
}

export function Th({
  sort,
  className,
  children,
}: ComponentProps<'th'> & {sort?: string}) {

  return (
    <th
      scope="col"
      className={classNames(
        'relative border-b border-b-gray-200 px-3 py-3.5 text-left text-sm font-semibold text-gray-900',
        {'cursor-pointer': sort},
        className,
      )}
    >
      <div className="inline-flex">
        {children}{' '}
      </div>
    </th>
  )
}

export function Tr({
  children,
  isSelected,
  className,
  ...props
}: ComponentProps<'tr'> & {isSelected?: boolean}) {
  return (
    <tr
      className={classNames(
        {
          'bg-gray-50': isSelected,
        },
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  )
}

export function Td(props: ComponentProps<'td'>) {
  return (
    <td
      className={classNames('px-3 py-4 text-sm text-gray-500', props.className)}
    >
      {props.children}
    </td>
  )
}

export function Table(props: ComponentProps<'table'>) {
  return <table className="w-full table-auto">{props.children}</table>
}

export function THead(props: ComponentProps<'thead'>) {
  return <thead className="bg-gray-50">{props.children}</thead>
}

export function TBody(props: ComponentProps<'tbody'>) {
  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {props.children}
    </tbody>
  )
}

export function TableWrapper(props: {children: ReactNode}) {
  return (
    <div className="relative mt-4 overflow-x-auto shadow ring-1 ring-black ring-opacity-5">
      {props.children}
    </div>
  )
}
