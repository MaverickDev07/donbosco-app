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
import { IconButton } from '@rmwc/icon-button'

const API_URL = process.env.REACT_APP_API_PHP

export default function ListBoletines({ curso, turno, gestion, id_est }) {
  return (
    <List twoLine>
      <a
        href={`${API_URL}/boletines/primer/${curso}-${turno}-${gestion}-${id_est}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <ListItem>
          <ListItemGraphic icon="looks_one" />
          <ListItemText>
            <ListItemPrimaryText>Primer Trimestre</ListItemPrimaryText>
            <ListItemSecondaryText>Ver boletin</ListItemSecondaryText>
          </ListItemText>
          <ListItemMeta>
            <IconButton icon="link" style={{ outline: 'none' }} />
          </ListItemMeta>
        </ListItem>
      </a>
      <a
        href={`${API_URL}/boletines/segundo/${curso}-${turno}-${gestion}-${id_est}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <ListItem>
          <ListItemGraphic icon="looks_two" />
          <ListItemText>
            <ListItemPrimaryText>Segundo Trimestre</ListItemPrimaryText>
            <ListItemSecondaryText>Ver boletin</ListItemSecondaryText>
          </ListItemText>
          <ListItemMeta>
            <IconButton icon="link" style={{ outline: 'none' }} />
          </ListItemMeta>
        </ListItem>
      </a>
      <a
        href={`${API_URL}/boletines/tercer/${curso}-${turno}-${gestion}-${id_est}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <ListItem>
          <ListItemGraphic icon="looks_3" />
          <ListItemText>
            <ListItemPrimaryText>Tercer Trimestre</ListItemPrimaryText>
            <ListItemSecondaryText>Ver boletin</ListItemSecondaryText>
          </ListItemText>
          <ListItemMeta>
            <IconButton icon="link" style={{ outline: 'none' }} />
          </ListItemMeta>
        </ListItem>
      </a>
    </List>
  )
}
