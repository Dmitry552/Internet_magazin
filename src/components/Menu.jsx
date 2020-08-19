import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';

var CartComponent = ({title, id, image, removeFromCart}) => {

  return (
    <List selection divided verticalAlign='middle'>
      <List.Item>
        <List.Content floated='right'>
          <Button onClick={removeFromCart.bind(this, id)} color='red'>Удалить</Button>
        </List.Content>
        <Image avatar src={image} />
        <List.Content>{title}</List.Content>
      </List.Item>
    </List>
)};

var MenuComponent = ({totalPrice, count, items}) => (
  <Menu>
    <Menu.Item  name='browse' /*onClick={this.handleItemClick}*/>
      <p>Магазин книг</p>
    </Menu.Item>
    
    <Menu.Menu position='right'>
      <Menu.Item name='signup' /*onClick={this.handleItemClick}*/>
        Итого: &nbsp; <b>{totalPrice}</b> грн.
      </Menu.Item>
      <Popup 
        trigger={
          <Menu.Item name='help' /*onClick={this.handleItemClick}*/>
            Корзина (<b>{count}</b>)
          </Menu.Item>
        }
        content={items.map(book => <CartComponent {...book} />)}
        on="click"
        hideOnScroll
      />
      
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;