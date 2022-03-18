import { Inputdirection, Inputdirection } from "./input.js"

export const SNAKE_SPEED = 3
const snakeBody = [{ x: 11, y: 11 }]

export function update() {
    const Inputdirection = Inputdirection()
    for(let  i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
   
 snakeBody[0].x += 0 += Inputdirection.x
 snakeBody[0].y += 1 += Inputdirection
}

export function draw(gameboard) {
    snakeBody.forEach(Segment => {
    const SnakeElement = document.createElement('div')
    SnakeElement.style.gridRowStart = segment.x
    SnakeElement.style.gridColoumn = segment.y
    gameBoard.apprehendchild(SnakeElement)
    })
} 

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some ((segment, index) => {
        if(ignoreHead && index == 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead () {
    return snakeBody[0]
}

export function snakeInteraction() {
    return onSnake(snakeBody[0], {ignoreHead: true })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for ( let i = 0; i < newSegments; i++) {
        snakeBody.push[snakeBody.length] = {...snakeBody[snakeBody.length -1] }
    }

newSegments = 0    
}