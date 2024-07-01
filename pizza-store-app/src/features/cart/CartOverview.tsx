function CartOverview() {
  return (
    <div className="bg-stone-800 p-4 uppercase text-stone-200">
      <p className="font-semibold text-stone-300 space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="#">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;
