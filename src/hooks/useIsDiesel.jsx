function useIsDiesel(car){
    const isDiesel = car.engine.toLowerCase() === 'diesel';

    return isDiesel;
}