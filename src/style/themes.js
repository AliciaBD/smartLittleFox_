export const themes = {
  default: {
    home: {
      buttons: {
        home: {
          normal: "#8e6be1",
          dark: "#7e56dc",
        },
      },
    },
    lesson: {
      buttons: {
        word: {
          normal: "#ff9f00",
          dark: "#cc7f00",
        },
        CTA: {
          normal: "#FFC54D",
          dark: "#cc9d3d",
        },
        secondary: {
          normal: "#ffde9b",
          dark: "#FFC54D",
        },
        pagination: {
          normal: "#60e0e2",
          dark: "#00b9bc",
        },
        icon: {
          dark: "#6444b0",
          normal: "#a387e6",
        },
        audio: {
          normal: "#fbe204",
        },
      },
    },
  },
};

function createShades([h, s, l, a], tone) {
  if (tone === "light") return h + ", " + s + "%, " + (l + 20) + "%, " + a;
  if (tone === "normal") return h + ", " + s + "%, " + l + "%, " + a;
  if (tone === "dark") return h + ", " + s + "%, " + (l - 5) + "%, " + a;
  if (tone === "darker") return h + ", " + s + "%, " + (l - 15) + "%, " + a;
}

export const themesr = {
  colors: {
    default: {
      name: "default",
      background: "white",
      // navbar: "white",
      btnPrimary: {
        normal: `hsla(${createShades([258, 66, 65, 1], "normal")})`,
        dark: `hsla(${createShades([258, 66, 65, 1], "dark")})`,
        darker: `hsla(${createShades([258, 66, 65, 1], "darker")})`,
      },
    },
    menu: {
      name: "menu",
      // background: "#EFD1F2",
      // background: "#C8B7F0",
      background: "#FFC54D",
      // backgroundImage: `url(${bgTexture})`,
      // backgroundImage: "linear-g#8C69E0radient(to right, #EFD1F2, #9390DB);",
      btnPrimary: {
        normal: `hsla(${createShades([263, 100, 59, 1], "normal")})`,
        dark: `hsla(${createShades([263, 100, 59, 1], "dark")})`,
        darker: `hsla(${createShades([263, 100, 59, 1], "darker")})`,
      },
    },
    s01: {
      name: "s01",
      // background: "#b6f637",
      // background: "#9390DB",
      background: "#8C69E0",
      // background: "#EFD1F2",
      // navbar: "#98d819",
      // border: 4px solid #314fa9;
      // hsla(54, 97%, 50%, 1)
      btnPrimary: {
        normal: `hsla(${createShades([54, 97, 50, 1], "normal")})`,
        // normal: `hsla(${createShades([263, 100, 59, 1], "normal")})`,
        dark: `hsla(${createShades([54, 97, 50, 1], "dark")})`,
        // dark: `hsla(${createShades([263, 100, 59, 1], "dark")})`,
        darker: `hsla(${createShades([54, 97, 50, 1], "darker")})`,
        // darker: `hsla(${createShades([263, 100, 59, 1], "darker")})`,
      },
      // btnSecondary: {
      //   normal: `hsla(${createShades([263, 100, 59, 1], "light")})`,
      //   dark: `hsla(${createShades([263, 100, 59, 1], "normal")})`,
      //   darker: `hsla(${createShades([263, 100, 59, 1], "dark")})`,
      // },
      btnSecondary: {
        normal: "transparent",
        // dark: `hsla(${createShades([37, 95, 50, 1], "dark")})`,
        darker: `hsla(${createShades([181, 100, 41, 1], "darker")})`,
      },
      btnWords: {
        normal: `hsla(${createShades([181, 100, 41, 1], "normal")})`,
        darker: `hsla(${createShades([181, 100, 41, 1], "darker")})`,
      },
      btnCallToAction: {
        normal: `hsla(${createShades([340, 100, 59, 1], "normal")})`,
        dark: `hsla(${createShades([340, 100, 50, 1], "dark")})`,
        darker: `hsla(${createShades([340, 100, 50, 1], "darker")})`,
      },
      btnCTASecondary: {
        normal: `hsla(${createShades([340, 100, 74, 1], "normal")})`,
        dark: `hsla(${createShades([340, 100, 74, 1], "dark")})`,
        darker: `hsla(${createShades([340, 100, 74, 1], "darker")})`,
      },
      // btnPagination: {
      //   normal: `hsla(${createShades([37, 95, 50, 1], "normal")})`,
      //   dark: `hsla(${createShades([37, 95, 50, 1], "dark")})`,
      //   darker: `hsla(${createShades([37, 95, 50, 1], "darker")})`,
      // },

      btnPagination: {
        normal: `hsla(${createShades([219, 79, 66, 1], "normal")})`,
        dark: `hsla(${createShades([37, 95, 50, 1], "dark")})`,
        darker: `hsla(${createShades([219, 79, 66, 1], "darker")})`,
      },
    },
  },
};
