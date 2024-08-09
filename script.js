document.addEventListener('DOMContentLoaded', function() {
    const flower = document.querySelector('.flower');
    flower.addEventListener('click', function() {
        alert('شكراً لك أبي على كل شيء!');
    });
    particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 100,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 100,
              "size": 40,
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
      document.addEventListener('DOMContentLoaded', () => {
        const flowers = document.querySelectorAll('.flower');
        flowers.forEach(flower => {
          flower.style.left = `${Math.random() * 100}vw`;
          flower.style.top = `${Math.random() * 100}vh`;
        });
      });
      
      const canvas = document.getElementById('fireworks');
const fireworks = new Fireworks(canvas);

fireworks.start();


    // أضف تأثير للورود عند تحميل الصفحة
    document.body.classList.add('bg-animation');
    // script.js
document.addEventListener('DOMContentLoaded', function() {
    // إضافة تأثيرات إضافية أو التعامل مع الصوت هنا
});

});

