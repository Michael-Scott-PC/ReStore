namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        public List<BasketItem> Items { get; set; } = new();

        public void AddItem(Product product, int quantity)
        {
            if (Items.All(i => i.Product.Id != product.Id))
            {
                Items.Add(new BasketItem { Product = product, Quantity = quantity });
                return;
            }

            Items.First(i => i.Product.Id == product.Id).Quantity += quantity;
        }

        public void RemoveItem(int productId, int quantity)
        {
            var item = Items.FirstOrDefault(i => i.Product.Id == productId);
            if (item == null) return;

            item.Quantity -= quantity;

            if (item.Quantity == 0) Items.Remove(item);
        }
    }
}