export const autoBrands = {
    toyota: { _id: "00rdca3eeb7f6fgeed47181500", name: "TOYOTA" },
    mitsubishi: { _id: "11rdca3eeb7f6fgeed47181500", name: "MITSUBISHI" },
    subaru: { _id: "22rdca3eeb7f6fgeed47181500", name: "SUBARU" }
};

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(autoBrands);
        }, 1000);
    });
export default {
    fetchAll
};
