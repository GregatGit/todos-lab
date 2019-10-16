import React from 'react'
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton
} from '@material-ui/core/'
import DeleteIcon from '@material-ui/icons/Delete'

const TheListItem = props => {
  const { name, checkedArr, labelId, index, handleDelete, handleToggle } = props
  return (
    <div>
      <ListItem
        key={name}
        role={undefined}
        dense
        button
        onClick={handleToggle(name)}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checkedArr.indexOf(name) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={name} />
        <ListItemSecondaryAction>
          <IconButton
            onClick={() => handleDelete(index)}
            edge="end"
            aria-label="comments"
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  )
}

export default TheListItem
