const canvas = document.querySelector('#background');

const settings = {
  colors: ['#02010A', '#04052E', '#140152', '#22007C', '#0D00A4'],
	triangleSize: 100,
  particleSettings: {
    count: 0
  }
}

ThpaceGL.create(canvas, settings);