function create_cars(manufacturer, model, color, speed) {
    const car = {
        manufacturer,
        model,
    }

    if (color) {
        car["color"] = color;
    }

    if (speed) {
        car["speed"] = speed;
    }

    return car;
}


console.log(create_cars("Toyota", "Yaris", "white", 200))