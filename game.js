import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeInteraction } from './snake.js'
import {update as updatefood, draw as drawFood} from './food'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameover = false
const gameBoard = document.getElementById('game-Board')


function main(currentTime) {
 if (gameover) {
    if (confirm('You lost. Press ok to restart')) {
        window.location = '/'
    }
    return
 }

    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return
    
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updatefood()
    updateDeath()
}

function draw() {
    gameBoard.innerHTML = 
    drawSnake()
}

function checkDeath() {
    gameover = outsideGrid(get.SnakeHead()) || snakeInteraction()
}