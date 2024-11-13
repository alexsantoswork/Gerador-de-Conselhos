document.getElementById("btn").addEventListener("click", () => {
    askAdvice()
    idAdvice()
})

async function randomAdvice() {
    const url = "https://api.adviceslip.com/advice"
    const random = await fetch(url)
    return await random.json()
}

async function generateAdvice() {
    const url = "https://api.adviceslip.com/advice"
    const random = await fetch(url)
    return await random.json()
}

async function askAdvice() {
    try {
        const advices = await randomAdvice()
        const assorted = await generateAdvice(advices.slip)
        const printAdvice = assorted.slip.advice
        document.getElementById("advice").innerText = printAdvice
    } catch (e) {

    }
}

async function idAdvice() {
    try {
        const advices = await randomAdvice()
        const assorted = await generateAdvice(advices.slip)
        const pintId = assorted.slip.id
        document.getElementById("id").innerText = "#" + pintId
    } catch (erro) {

    }
}

askAdvice()
idAdvice()