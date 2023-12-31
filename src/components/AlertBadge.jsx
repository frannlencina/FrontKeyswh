import React from 'react'

function AlertBadge(props) {
    return (
        <div>
            <div class="text-center py-4 lg:px-4 my-6">
                <div class={`p-2 ${props.bgColor} flex-col sm:flex-row items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`} role="alert">
                    <span class={`flex rounded-full ${props.color} uppercase px-2 py-1 text-xs font-bold mr-3`}>{props.type}</span>
                    <span class="font-semibold mr-2 text-center mt-2 sm:mt-0 sm:text-left flex-auto ">{props.text}</span>
                    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
                </div>
            </div>
        </div>
    )
}

export default AlertBadge