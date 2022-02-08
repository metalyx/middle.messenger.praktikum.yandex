export function validateInput(input: EventTarget): void {
  const isValid = input.validity.valid;

  if (isValid === false) {
    input.nextSibling.classList.remove('hidden');
  } else {
    input.nextSibling.classList.add('hidden');
  }
}

export function validateForm(): void {
  const input = document.querySelectorAll('input');

  input.forEach((i: HTMLElement) => validateInput(i));
}

function serializeForm(formNode: HTMLFormElement): any {
  const inputs = Array.from(formNode.getElementsByTagName('input'));
  const obj: any = {};
  inputs.forEach((i) => {
    obj[i.name] = i.value;
    return null;
  });
  return obj;
}

export function submitForm(event: Event): void {
  // 1- prevent form default behaviour
  event.preventDefault();

  // 2 - gather inputs data
  const data = serializeForm(event.target);
  console.log('form data=', data);
}

export function clearInput(event: Event): void {
  event.target!.firstElementChild.lastElementChild.value = '';
}
