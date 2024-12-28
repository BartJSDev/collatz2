var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio
canvas.height = innerHeight * devicePixelRatio

$("canvas").css("width", 100 + "%")
$("canvas").css("height", 100 + "%")
$("body").css("backgroundColor", "black")
$("body").css("margin", 0)
$("body").css("overflow", "hidden")


function Collatz(n) {

    let sequence = [n]

    do {

        if (n % 2 === 0) {

            n = n / 2

        } else {

            n = n * 3 + 1
        }

        sequence.push(n)


    } while (n !== 1)

    return sequence

}

function DrawSequence(number, len , linewidth) {

    let sequence = Collatz(number)
    let count = 1
    let angle = -Math.PI/2
    let x = canvas.width / 2
    let y = canvas.height / 2

    function run() {

        if (count < sequence.length) {

            if (sequence[count] % 2 === 0) {

                angle = angle - Math.PI / 7

            } else {

                angle = angle + Math.PI / 4
            }

            let nx = x + len * Math.cos(angle)
            let ny = y + len * Math.sin(angle)

            c.beginPath()
            c.strokeStyle = "hsl(" + count % 360 * 10 + ",100%,50%)"
            c.lineWidth = linewidth
            c.moveTo(x, y)
            c.lineTo(nx, ny)
            c.stroke()
            c.closePath()

            x = nx
            y = ny

            count++

            linewidth *= .9

           setTimeout(run,150)

        } else {

            console.log("we are done")
            return
        }
    }


    run()


}


function CreateSequencies() {

    for (var i = 10; i < 500; i++) {

        DrawSequence(i, canvas.width/50 , 10)
    }
}

CreateSequencies()