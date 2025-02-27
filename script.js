const questions = document.querySelectorAll(".questions .question")

const EXPANDED_CLASS = "expanded"

const CloseAll = async (exclude = null) => {
    questions.forEach(e => {
        if (e !== exclude && e.classList.contains(EXPANDED_CLASS)) {
            e.classList.remove(EXPANDED_CLASS)
        }
    });
}

questions.forEach(e => {
    const title = e.children[0]

    title.addEventListener("click", async () => {
        await CloseAll(e)

        e.classList.toggle(EXPANDED_CLASS)

    })
});
