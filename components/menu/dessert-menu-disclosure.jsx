import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function DessertMenuDisclosure(props) {
    const dessert = [{
        "name": "Suklaakakku",
        "price": "4"
    },
    {
        "name": "Suklaa muffinssi",
        "price": "3"
    },
    {
        "name": "Marja muffinssi",
        "price": "3"
    },
    {
        "name": "Erikoisuklaa",
        "price": "4"
    },
    {
        "name": "Vohveli",
        "price": "5"
    }, {
        "name": "Jäätelö annos",
        "price": "6"
    },
    ];


    return (

        <Disclosure>
            {({ open }) => (
                <>
                    <div className="py-1">
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>{props.title}</span>
                            <ChevronDownIcon
                                className={`${open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Transition
                            show={open}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm sm:text-base font-medium text-gray-900">
                                <div className="flex flex-col">
                                    {dessert.map(function (dessert, id) {
                                        return (<div key={id} className="flex justify-between py-2"><p key={id}>{dessert.name}</p>{dessert.price}€</div>)
                                    })}
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </div>
                </>
            )}
        </Disclosure>


    )
}
