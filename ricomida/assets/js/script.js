var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="mensaje0"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })