export const $ = (query: string) => window.document.querySelector(query);
export const $$ = (query: string) => window.document.querySelectorAll(query);

export const formatFileSize = (bytes: number) => {
  if (bytes < 1024) {
    return bytes + ' bytes';
  } else if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(2) + ' KB';
  } else if (bytes < 1024 * 1024 * 1024) {
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  } else {
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
  }
};

export function objectToQueryString(obj: any) {
  const params = new URLSearchParams();

  // Iterate over each key-value pair in the object
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // Add each key-value pair to the URLSearchParams object
      if (Array.isArray(obj[key])) {
        if (obj[key].length === 1) {
          params.append(`${key}[0]`, obj[key][0]);
        } else {
          for (let i = 0; i < obj[key].length; i++) {
            params.append(`${key}[${i}]`, obj[key][i]);
          }
        }
      } else {
        params.append(key, obj[key]);
      }
    }
  }

  // Return the query string
  return params.toString();
}

export function isElementInViewport(element: Element | null) {
  if (!element) return;
  const rect = element.getBoundingClientRect();
  // Check if the element is fully visible
  if (document) {
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}

export function getErrorMessage(errorData: any) {
  if (errorData.errors) {
    const errorValues = Object.values(errorData.errors);
    if (errorValues.length > 0) {
      return errorValues.join(' ');
    }
  }
  if (errorData.message) {
    return errorData.message;
  }
  return 'An error occur!';
}

export function isObject(value: any) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function displayNumber(value?: number) {
  if (!value) return 0;
  return new Intl.NumberFormat().format(value);
}

export function groupBy(array: Array<any>, key: string) {
  // Return the end result
  return array.reduce((result, currentValue) => {
    (result[currentValue?.[key]] = result?.[currentValue?.[key]] || []).push(
      currentValue,
    );
    return result;
  }, {});
}

export function focusElement(query: string) {
  try {
    if (!query) return false;
    const element: Element | null = document.querySelector(query);
    const focusElement = element as HTMLInputElement;
    focusElement?.focus();
  } catch (error) {
    console.warn(error);
  }
}

export function checkMultiple(value: number) {
  if (value > 1) {
    return 's';
  }
  return '';
}

export const transformHTMLQuill = (html: any) => {
  if (!html) return;
  return html
    .replaceAll('<ul>', `<ul class='list-disc pl-6'>`)
    .replaceAll('<ol>', `<ol class='list-decimal pl-6'>`)
    .replaceAll('<pre', '<div')
    .replaceAll('</pre>', '</div>');
};

export const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      $('#main-layout')?.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 100);
  }
};

export const scrollToElement = (query: string) => {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const element: any = $(query);
      $('#main-layout')?.scrollTo({
        top: element?.offsetTop - 90,
        behavior: 'smooth',
      });
    }, 100);
  }
};

export const transformObject = (obj: any) => {
  let result = {};
  if (isObject(obj)) {
    Object.keys(obj).forEach((key) => {
      if (Array.isArray(obj[key])) {
        result = {
          ...result,
          [`${key}[]`]: obj[key],
        };
      } else {
        result = {
          ...result,
          [key]: obj[key],
        };
      }
    });
  }
  return result;
};

export const transformParamsFilter = (filter: any) => {
  let result = {};
  if (isObject(filter)) {
    Object.keys(filter).forEach((key) => {
      if (Array.isArray(filter[key])) {
        result = {
          ...result,
          [`${key}`]: filter[key].join(','),
        };
      } else {
        result = {
          ...result,
          [key]: filter[key],
        };
      }
    });
  }
  return cleanObject(result);
};

export const cleanObject = (obj: { [key: string]: any }) => {
  for (const key in obj) {
    if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
      delete obj[key];
    }
  }
  return obj;
};

export const cleanNestedObject = (obj: any) => {
  // Check if the object is actually an object (and not an array or null)
  if (obj !== null && typeof obj === 'object' && !Array.isArray(obj)) {
    Object.keys(obj).forEach((key) => {
      // Recursively clean nested objects
      cleanObject(obj[key]);

      // Remove the key if the value is null, undefined, or an empty object
      if (
        obj[key] === null ||
        obj[key] === undefined ||
        (typeof obj[key] === 'object' &&
          !Array.isArray(obj[key]) &&
          Object.keys(obj[key]).length === 0)
      ) {
        delete obj[key];
      }
    });
  } else if (Array.isArray(obj)) {
    // If it's an array, clean its elements
    obj.forEach((item) => cleanObject(item));

    // Optionally, remove empty arrays (if needed)
    for (let i = obj.length - 1; i >= 0; i--) {
      if (typeof obj[i] === 'object' && Object.keys(obj[i]).length === 0) {
        obj.splice(i, 1);
      }
    }
  }
  return obj;
};

export function formatBytes(bytes: number, decimals?: number) {
  if (bytes == 0) return '0 Bytes';
  var k = 1024,
    dm = decimals || 2,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export const fileToBinary = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const binaryData = reader.result;
      resolve(binaryData);
    };
    reader.onerror = () => {
      reject(new Error('Unable to read the file as binary data'));
    };
    reader.readAsArrayBuffer(file);
  });
};

export const waitTime = (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

const hexToRgb = (hex: string) => {
  // Remove the "#" character if present
  hex = hex.replace('#', '');

  // Split the hex value into red, green, and blue components
  const red = parseInt(hex.substr(0, 2), 16);
  const green = parseInt(hex.substr(2, 2), 16);
  const blue = parseInt(hex.substr(4, 2), 16);

  // Return the RGB values as an object
  return {
    red,
    green,
    blue,
  };
};

export const isColorDark = (hex?: string) => {
  if (!hex) return;
  // Convert the hex color to RGB values
  const { red, green, blue } = hexToRgb(hex);

  // Calculate the relative luminance
  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;

  // Set a threshold value to determine if the color is dark
  const threshold = 0.5;

  // Compare the luminance with the threshold
  return luminance <= threshold;
};
