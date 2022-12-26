import Order from "../../../../../domain/checkout/entity/order";
import OrderItem from "../../../../../domain/checkout/entity/order_item";
import OrderModel from "../order.model";


export class SequelizeMapper {
  static toDomain(entity: OrderModel) {
    const items = entity?.items?.map(
      (item) =>
        new OrderItem(
          item.id,
          item.name,
          item.price,
          item.product_id,
          item.quantity
        )
    ) || [];

    return new Order(entity.id, entity.customer_id, items);
  }
}
