import React from 'react'

import {
  List,
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemMeta,
} from '@rmwc/list'
import FormNota from './FormNota'

export default function ListNotas({ notas }) {
  return (
    <List twoLine>
      {notas.map((nota) => (
        <ListItem key={nota.id_mat}>
          <ListItemText>
            <ListItemPrimaryText>{nota.nombre_materia}</ListItemPrimaryText>
            <ListItemSecondaryText>{nota.nombre_area}</ListItemSecondaryText>
          </ListItemText>
          <ListItemMeta>
            <FormNota nota={nota.total} className="mdc-list-item__meta" />
          </ListItemMeta>
        </ListItem>
      ))}
    </List>
  )
}
