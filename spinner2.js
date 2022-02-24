const spinner = (data) => {
  let result = 0;
  for (const change of data) {
    setTimeout(()=> {
      process.stdout.write(`\r${change}  `);
    }, result += 200);
  }
};
const signs = "|/-\\|/-\\|";
spinner(signs);