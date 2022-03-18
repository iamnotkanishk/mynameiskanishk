import {onSnake, expandSnake} from './snake.js'
import {RandomGridPosition} from './grid.js'

let food = {x: 10, y: 0}
const EXPANSION_RATE = 1

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition

    }
    
}

export function draw(gameboard) {
    const foodElement = document.createElement('div')
    FoodElement.style.gridRowStart = food.x
    FoodElement.style.gridColoumn = food.y
    food.classlist.add('food')
    gameBoard.apprehendchild(FoodElement)
} 

export function expandSnake(amount) {
    return snakeBody.some(segement => {
        return equalpositions(segment, position)
    })
}

function equalpositions(pos1, pos2) {
    return(
        pos1.x === pos2.x && pos1.y === pos2.y
    )
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = RandomGridPosition()
    }
    return newFoodPosition
}
