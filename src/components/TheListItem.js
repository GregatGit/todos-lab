import React from 'react'

const TheListItem = ({name}) => {
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
        checked={checked.indexOf(name) !== -1}
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
        aria-label="comments">
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
    </div>
  )
}

export default TheListItem
