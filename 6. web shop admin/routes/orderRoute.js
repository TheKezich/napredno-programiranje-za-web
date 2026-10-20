import express from 'express'
// ./ - trenutna mapa, ../ - mapa iznad
import { dbConnection } from '../index.js'
import { appConstants } from '../config/appConstants.js'

export const router = express.Router()

router.get("/", async (req, res) => {
  try {
    //select id, full_name, status, payment_type, order_date from user_order;
    const [orders] = await dbConnection.query(
      `select id, full_name as fullName, status, payment_type as paymentType, order_date as orderDate
      from user_order;`,
    );
    res.render("orders", { pageName: "Orders", orders: orders });
  } catch (error) {
    console.log(`Error: ${error}`)
    res.render("server-error")
  }
});

router.get("/details", async (req, res) => {
  const orderId = Number(req.query.id);
      if(Number.isInteger(orderId) && orderId > 0) {
        const [orderDetailsDbResult] = await dbConnection.query(
    `select uo.full_name as fullName,
  oi.quantity,
  oi.price,
  p.id,
  p.name,
  uo.street,
  uo.zip_code,
  uo.city,
  uo.phone,
  uo.payment_type as paymentTipe,
  uo.status,
  uo.order_date as orderDate
  from user_order as uo
  join order_item as oi on oi.order_id = uo.id
  join product as p on oi.product_id = p.id
  where uo.id = ${orderId};`,
  );
  if(orderDetailsDbResult.length === 0) {
    res.render("server-error", { pageName: "Server error"})
  }
const orderDetails = {
  fullName: orderDetailsDbResult[0].fullName,
  street: orderDetailsDbResult[0].street,
  city: orderDetailsDbResult[0].city,
  phone: orderDetailsDbResult[0].phone,
  zipCode: orderDetailsDbResult[0].zipCode,
  paymentType: orderDetailsDbResult[0].paymentType,
  status: orderDetailsDbResult[0].status,
  orderDate: orderDetailsDbResult[0].orderDate,
  items: []
}
 for (let index = 0; index < orderDetailsDbResult.length; index++) {
  const orderDetailItem = orderDetailsDbResult[index];
  orderDetails.items.push({
    name: orderDetailItem.name,
    price: orderDetailItem.price,
    quantity: orderDetailItem.quantity})
 }

res.render("ordewr-details", {
  pagename: "Order details",
  orderDetails: orderDetailsDbResult
})
  res.render("order-details", { pageName: "Order details"})
      }else {
        res.render("server-error", { pageName: "Server error"})
      }
  
})