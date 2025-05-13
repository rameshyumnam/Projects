const arrows = document.querySelectorAll(".arrow");
document.querySelectorAll(".ans").forEach(ans => {
    ans.style.display = "none";
})
;arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
        const ans = arrow.closest("div").querySelector(".ans");

        if (ans && ans.classList.contains("ans")) {
            if (ans.style.display === "none") {
                ans.style.display = "block";
                arrow.classList.add("rotated")
            } else {
                ans.style.display = "none";
                arrow.classList.remove("rotated")
            }
        }
    });
});