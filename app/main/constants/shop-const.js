'use strict';
angular.module('main')
.constant('Constants', {

    GRADE: {
        LOW: 30,
        MID: 35,
        HIGH: 45
    },

    SUBSPECIES: {
        SATIVA: "Sativa",
        INDICA: "Indica",
        HYBRID: "Hybrid"
    },

    SIZE: {
        EIGHTH: "eighth",
        QUARTER: "quarter",
        HALF: "half",
        OUNCE: "ounce"
    }
})
.constant('Temp',
  [
    {
        id: 1,
        name: "OG Kush",
        img: "main/assets/images/OG_kush.jpg",
        grade: 35,
        desc: "OG Kush is cherished for its ability to crush stress under the weight of its heavy euphoria. It carries an earthy pine and sour lemon scent with woody undertones, an aroma that has become the signature of OG Kush varieties and descendants.",
        thc: 19.5,
        subspecies: "Indica"
    },
    {
        id: 2,
        name: "Girl Scout Cookies",
        img: "main/assets/images/Girl_Scout.jpg",
        grade: 45,
        desc: "With a sweet and earthy aroma, Girl Scout Cookies launches you to euphoria’s top floor where full-body relaxation meets a time-bending cerebral space. A little goes a long way with this hybrid, whose THC heights have won Girl Scout Cookies numerous Cannabis Cup awards.",
        thc: 26.3,
        subspecies: "Hybrid"
    },
    {
        id: 3,
        name: "Sour Diesel",
        img: "main/assets/images/Sour_Diesel.jpg",
        grade: 45,
        desc: "Sour Diesel, sometimes called Sour D, is an invigorating sativa named after its pungent, diesel-like aroma. This fast-acting strain delivers energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status. Stress, pain, and depression fade away in long-lasting relief that makes Sour Diesel a top choice among medical patients.",
        thc: 20.1,
        subspecies: "Sativa"
    },
    {
        id: 4,
        name: "Train Wreck",
        img: "main/assets/images/Sour_Diesel.jpg",
        grade: 35,
        desc: "Trainwreck is a mind-bending hybrid with potent sativa effects that hit like a freight train. Mexican and Thai sativas were bred with Afghani indicas to produce this Northern California staple, passing on a sweet lemon and spicy pine aroma. Trainwreck begins its speedy hurtle through the mind with a surge of euphoria, awakening creativity and happiness.",
        thc: 18.8,
        subspecies: "Hybrid"
    },
    {
        id: 5,
        name: "Shake Mix",
        img: "main/assets/images/Shake_Mix.jpg",
        grade: 30,
        desc: "A mix of small buds and shake from our various strains. Exceptional quality at an exceptional price!",
        thc: 15,
        subspecies: "Hybrid"
    }
  ]
);
