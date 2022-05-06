import React, { SVGProps } from 'react'
interface Props {
  title: string
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}
function SideBarRow({ Icon, title }: Props) {
  return (
    <div className="durarion-200 group flex max-w-fit cursor-pointer space-x-2 rounded-full px-4 py-3 transition-all hover:bg-gray-100">
      <Icon className="h-6 w-6" />
      <p className="hidden text-base group-hover:text-twitter md:inline-flex lg:text-xl">
        {title}
      </p>
    </div>
  )
}

export default SideBarRow
