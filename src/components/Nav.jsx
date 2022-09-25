import React from "react"
import Downshift from 'downshift'
const options = [
    { value: 'bakery', label: 'Bakery' },
    { value: 'coffee', label: 'Coffee' },
    { value: 'breakfast', label: 'Breakfast' },
];

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: "Search shop category. Ex. 'bakery', 'coffee', 'breakfast'",
            options: options,
        }
    }

    onChange = (v, option) => {
        this.props.getVenues(option.selectedItem.value)
    }

    render() {
        return (
            <div className="w-1/2 mx-auto">
                <Downshift
                    onChange={this.onChange}
                    itemToString={item => (item ? item.value : '')}
                >
                    {({
                        getInputProps,
                        getItemProps,
                        getLabelProps,
                        getMenuProps,
                        isOpen,
                        inputValue,
                        highlightedIndex,
                        selectedItem,
                        getRootProps,
                    }) => (
                        <div>
                            <label {...getLabelProps()} className="font-mono border-b-4 border-cyan-900 text-2xl ml-8">Pick a place</label>
                            <div
                                style={{ display: 'flex' }}
                                {...getRootProps({}, { suppressRefError: true })}
                            >
                                <input {...getInputProps()} className="mt-0 border-2 border-cyan-900 rounded-full w-full shadow-lg py-1 px-3" placeholder={this.state.placeholder} />
                            </div>
                            <ul {...getMenuProps()} className="px-6 border-2 border-cyan-900 -mt-2 w-11/12 mx-auto rounded-xl">
                                {isOpen
                                    ? options
                                        .filter(item => !inputValue || item.value.includes(inputValue))
                                        .map((item, index) => (
                                            <li
                                                className="pt-3"
                                                {...getItemProps({
                                                    key: item.value,
                                                    index,
                                                    item,
                                                    style: {
                                                        backgroundColor:
                                                            highlightedIndex === index ? 'lightgray' : 'white',
                                                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                                                    },
                                                })}
                                            >
                                                {item.label}
                                            </li>
                                        ))
                                    : null}
                            </ul>
                        </div>
                    )}
                </Downshift>,
            </div>
        )
    }
}


export default Nav


