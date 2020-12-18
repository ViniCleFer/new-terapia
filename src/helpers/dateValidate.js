export default class DateHelper {
  static durationFormatter(startTime, endTime) {
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);

    let seconds = endDate.getSeconds() - startDate.getSeconds();
    let minutes = endDate.getMinutes() - startDate.getMinutes();

    if (seconds < 0) {
      minutes += -1;
      seconds = 60 - seconds * -1;
    }

    let msg;
    if (startTime === null || endTime === null) msg = '';
    else if (minutes === 0)
      seconds === 1
        ? (msg = `${seconds} segundo`)
        : (msg = `${seconds} segundos`);
    else if (seconds <= 0)
      minutes === 1
        ? (msg = `${minutes} minuto`)
        : (msg = `${minutes} minutos`);
    else {
      minutes === 1 && seconds === 1
        ? (msg = `${minutes} minuto e ${seconds} segundo`)
        : minutes === 1 && seconds > 1
        ? (msg = `${minutes} minuto e ${seconds} segundos`)
        : minutes > 1 && seconds === 1
        ? (msg = `${minutes} minutos e ${seconds} segundo`)
        : (msg = `${minutes} minutos e ${seconds} segundos`);
    }
    return msg;
  }

  static formatedDate(date) {
    const formatedDate = date.substring(0, 10);
    const dateParts = formatedDate.split('-');
    const newDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    return newDate;
  }

  static formatDateToPersist(currentDate) {
    if (currentDate) {
      const dateParts = currentDate.split('/');
      const newDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
      return newDate;
    }

    return '';
  }

  static formatedDateInDate(date) {
    if (date) {
      const dateParts = date.split('/');
      const newDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

      return newDate;
    }

    return '';
  }

  static formatedDateInDateWithHypen(date) {
    if (date) {
      const dateParts = date.split('-');
      const newDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

      return newDate;
    }

    return '';
  }

  static formatDateProgramToPersist(currentDate) {
    if (currentDate) {
      const dateParts = currentDate.split('-');
      const newDate = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
      return newDate;
    }

    return '';
  }

  static formatDateWithWrongFormatToPersist(currentDate, time) {
    if (currentDate) {
      const dateParts = currentDate.split('/');
      if (dateParts[0].length === 1) {
        dateParts[0] = `0${dateParts[0]}`;
      }
      if (dateParts[1].length === 1) {
        dateParts[1] = `0${dateParts[1]}`;
      }
      const timeWithoutSpace = time.replace(' ', '');
      const newDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]} ${timeWithoutSpace}`;
      return newDate;
    }

    return '';
  }

  static formatedTime(time) {
    const formatedTime = time.substring(11, 16);
    return formatedTime;
  }

  static isDate(dateString) {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return false;

    // Parse the date parts to integers
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month === 0 || month > 12) return false;

    const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
      monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
  }

  static lastMenstrualDateValidation(date) {
    const receivedDate = new Date(this.formatDateToPersist(date));
    const nowDate = new Date();
    const minimumDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      nowDate.getDate() - 300,
    );

    if (receivedDate.getTime() > nowDate.getTime()) {
      return false;
    }
    if (receivedDate.getTime() > minimumDate.getTime()) {
      return true;
    }
    return false;
  }

  static calculateUltrasoundPregnant(date) {
    const receivedDate = new Date(this.formatDateToPersist(date));
    const newDate = new Date(
      receivedDate.getFullYear(),
      receivedDate.getMonth() + 9,
      receivedDate.getDate() + 7,
    );
    try {
      // const newDateBr = new Intl.DateTimeFormat('pt-BR');
      // const newFormatedDate = newDateBr.format(newDate);
      // console.tron.log(newFormatedDate);
      // return newFormatedDate;
      return newDate;
    } catch (err) {
      console.tron.log(err);
    }

    return '';
  }

  static limitBornDateValidation(date) {
    const receivedDate = new Date(this.formatDateToPersist(date));
    const nowDate = new Date();

    if (receivedDate.getTime() > nowDate.getTime()) return false;
    if (receivedDate.getFullYear() >= 1960) return true;

    return false;
  }

  static ultrasoundPregnantValidation(date) {
    const receivedDate = new Date(this.formatDateToPersist(date));
    const nowDate = new Date();
    const maximumDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      nowDate.getDate() + 300,
    );

    if (receivedDate.getTime() < nowDate.getTime()) return false;
    if (receivedDate.getTime() < maximumDate.getTime()) return true;

    return false;
  }

  static limitBabyBornDateValidation(date) {
    const receivedDate = new Date(this.formatDateToPersist(date));
    const nowDate = new Date();
    const minimumDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth() - 24,
      nowDate.getDate(),
    );

    if (receivedDate.getTime() > nowDate.getTime()) return false;
    if (receivedDate.getTime() < minimumDate.getTime()) return false;

    return true;
  }

  static limitBabyBornDateMaternaValidation(date) {
    const receivedDate = new Date(this.formatDateToPersist(date));
    const nowDate = new Date();
    const minimumDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth() - 6,
      nowDate.getDate(),
    );

    if (receivedDate.getTime() > nowDate.getTime()) return false;
    if (receivedDate.getTime() < minimumDate.getTime()) return false;

    return true;
  }

  static limitBabyBornDateProgramValidation(date) {
    const receivedDate = new Date(this.formatDateProgramToPersist(date));
    const nowDate = new Date();
    const minimumDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth() - 6,
      nowDate.getDate(),
    );

    if (receivedDate.getTime() > nowDate.getTime()) return false;
    if (receivedDate.getTime() < minimumDate.getTime()) return false;

    return true;
  }

  static limitBornDateMayoritValidation(date) {
    const receivedDate = new Date(this.formatDateToPersist(date));
    const nowDate = new Date();

    if (receivedDate.getTime() > nowDate.getTime()) return false;
    if (receivedDate.getFullYear() < nowDate.getFullYear() - 18) {
      return true;
    }
    if (
      receivedDate.getFullYear() === nowDate.getFullYear() - 18 &&
      receivedDate.getMonth() + 1 < nowDate.getMonth() + 1
    ) {
      return true;
    }
    if (
      receivedDate.getFullYear() === nowDate.getFullYear() - 18 &&
      receivedDate.getMonth() + 1 === nowDate.getMonth() + 1 &&
      receivedDate.getDate() + 1 <= nowDate.getDate()
    ) {
      return true;
    }

    return false;
  }

  static deadlineValidation(date) {
    if (date) {
      const receivedDate = date.split('T');

      const receivedDateSplit = receivedDate[0].split('-');

      const dateNow = new Date();

      const FormattedSome = new Date(
        receivedDateSplit[0],
        Number(receivedDateSplit[1]) - 1,
        Number(receivedDateSplit[2]) + 7,
      );

      if (dateNow < FormattedSome) return true;
    }

    return false;
  }
}
