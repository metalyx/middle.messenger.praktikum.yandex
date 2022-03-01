const sendButtonProps = {
  className: 'footer-send',
  events: {
    click: () => {
      const input: HTMLInputElement = document.getElementById('message') as HTMLInputElement;
      if (input.value) {
        console.log(input.name, input.value);
      }
    },
  },
};

export default sendButtonProps;
