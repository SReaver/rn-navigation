class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    IsVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds,
      this.title = title,
      this.affordability = affordability,
      this.complexity = complexity,
      this.imageUrl = imageUrl,
      this.duration = duration,
      this.ingredients = ingredients,
      this.steps = steps,
      this.isGlutenFree = isGlutenFree,
      this.isVegan = isVegan,
      this.IsVegetarian = IsVegetarian,
      this.isLactoseFree = isLactoseFree
  }
}
export default Meal;