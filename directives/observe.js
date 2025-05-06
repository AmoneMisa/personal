export default {
    mounted(el) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('appear')
                    observer.unobserve(el)
                }
            },
            {
                threshold: 0.1,
            }
        )

        observer.observe(el)
    },
}
