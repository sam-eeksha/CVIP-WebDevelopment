document.addEventListener("DOMContentLoaded", function () {
    const htmlEditor = document.getElementById("html");
    const cssEditor = document.getElementById("css");
    const jsEditor = document.getElementById("js");
    const codeOutput = document.getElementById("code").contentWindow.document;

    function updateOutput() {
        codeOutput.open();
        codeOutput.writeln(
            htmlEditor.value +
            "<style>" + cssEditor.value + "</style>" +
            "<script>" + jsEditor.value + "</script>"
        );
        codeOutput.close();
    }

    // Auto-update output when there is an input
    htmlEditor.addEventListener("input", updateOutput);
    cssEditor.addEventListener("input", updateOutput);
    jsEditor.addEventListener("input", updateOutput);

    // Highlight the editor box when the cursor enters it
    const editorBoxes = document.querySelectorAll(".editors");
    editorBoxes.forEach((box) => {
        box.addEventListener("mouseenter", function () {
            box.classList.add("highlight");
        });

        box.addEventListener("mouseleave", function () {
            box.classList.remove("highlight");
        });
    });

    // Initialize with initial content
    updateOutput();
});