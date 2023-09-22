const studentA = {
  name: "Daniel",
  surname: "Andreu",
  sleepHoursLastNight: 3,
  grade: 5,

  sayHi: function () {
    console.log(
      `Me llamo ${this.name} ${this.surname} y ayer dormí ${this.sleepHoursLastNight} horas.`
    );
  },

  sleep: (hours) => {
    if (hours >= 0) {
      studentA.sleepHoursLastNight += hours;
    }
  },

  hasSleep: () => {
    if (studentA.sleepHoursLastNight >= 2) {
      return true;
    } else {
      return false;
    }
  },
};

const studentB = {
  name: "Matias",
  surname: "Risco",
  sleepHoursLastNight: 6,
  grade: 10,

  sayHi: function () {
    console.log(
      `Me llamo ${this.name} ${this.surname} y ayer dormí ${this.sleepHoursLastNight} horas.`
    );
  },

  sleep: (hours) => {
    if (hours >= 0) {
      studentB.sleepHoursLastNight += hours;
    }
  },

  hasSleep: () => {
    if (studentB.sleepHoursLastNight >= 2) {
      return true;
    } else {
      return false;
    }
  },
};
