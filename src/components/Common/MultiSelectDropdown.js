import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const  MultiSelectDropdown = (props)  => {
    const {options, selectTitle, width} = props;
    const [selectedOptions, setSelectedOptions] = React.useState([]);
  
    const handleChange = (event) => {
        setSelectedOptions(event.target.value);
        if(props.onChange)
        {
            props.onChange(event.target.value);
        }
    };

    if(options && options.length){
        return (
            <div>
                <InputLabel id="demo-mutiple-checkbox-label">{selectTitle}</InputLabel>
                <Select
                    id="demo-mutiple-checkbox"
                    labelId="demo-mutiple-checkbox-label"
                    style={{ width: width ? width : "200px" }}
                    multiple
                    value={selectedOptions}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(', ')} >
                    {options.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={selectedOptions.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </div>
        );
    }
}

export default MultiSelectDropdown;
