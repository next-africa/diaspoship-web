export default function(url) {
  return new Promise((resolve, reject) => {
    const script = window.document.createElement('script'),
      scripts = window.document.getElementsByTagName('script')[0];

    script.onload = () => {
      resolve();
    };

    script.onerror = error => {
      reject(error);
    };

    script.src = url;
    scripts.parentNode.insertBefore(script, scripts);
  });
}
