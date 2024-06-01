import { type LocaleObject } from 'yup';

const localeObject: Required<LocaleObject> = {
  mixed: {
    default: (params) => {
      return { i18nKey: 'yup.yup.mixed.default', params };
    },
    required: (params) => {
      return {
        i18nKey: 'yup.yup.mixed.required',
        params
      };
    },
    oneOf: (params) => {
      return {
        i18nKey: 'yup.yup.mixed.oneOf',
        params: {
          path: params.path,
          values: params.values
        }
      };
    },
    notOneOf: (params) => {
      return {
        i18nKey: 'yup.yup.mixed.notOneOf',
        params
      };
    },
    defined: (params) => {
      return {
        i18nKey: 'yup.yup.mixed.defined',
        params
      };
    },
    notNull: (params) => {
      return {
        i18nKey: 'yup.yup.mixed.notNull',
        params
      };
    },
    notType: (params) => {
      return {
        i18nKey: 'yup.yup.mixed.notType',
        params
      };
    }
  },
  string: {
    length: (params) => {
      return {
        i18nKey: 'yup.yup.string.length',
        params
      };
    },
    min: (params) => {
      return {
        i18nKey: 'yup.yup.string.min',
        params
      };
    },
    max: (params) => {
      return {
        i18nKey: 'yup.yup.string.max',
        params
      };
    },
    matches: (params) => {
      return {
        i18nKey: 'yup.yup.string.matches',
        params
      };
    },
    email: (params) => {
      return {
        i18nKey: 'yup.yup.string.email',
        params
      };
    },
    url: (params) => {
      return {
        i18nKey: 'yup.yup.string.url',
        params
      };
    },
    uuid: (params) => {
      return {
        i18nKey: 'yup.yup.string.uuid',
        params
      };
    },
    trim: (params) => {
      return {
        i18nKey: 'yup.yup.string.trim',
        params
      };
    },
    lowercase: (params) => {
      return {
        i18nKey: 'yup.yup.string.lowercase',
        params
      };
    },
    uppercase: (params) => {
      return {
        i18nKey: 'yup.yup.string.uppercase',
        params
      };
    }
  },
  number: {
    min: (params) => ({
      i18nKey: 'yup.yup.number.min',
      params
    }),
    max: (params) => {
      return {
        i18nKey: 'yup.yup.number.max',
        params
      };
    },
    lessThan: (params) => {
      return {
        i18nKey: 'yup.yup.number.less',
        params
      };
    },
    moreThan: (params) => {
      return {
        i18nKey: 'yup.yup.number.more',
        params
      };
    },
    positive: (params) => {
      return {
        i18nKey: 'yup.yup.number.positive',
        params
      };
    },
    negative: (params) => {
      return {
        i18nKey: 'yup.yup.number.negative',
        params
      };
    },
    integer: (params) => {
      return {
        i18nKey: 'yup.yup.number.integer',
        params
      };
    }
  },
  date: {
    min: (params) => {
      return {
        i18nKey: 'yup.yup.date.min',
        params
      };
    },
    max: (params) => {
      return {
        i18nKey: 'yup.yup.date.max',
        params
      };
    }
  },
  boolean: {
    isValue: (params) => {
      return {
        i18nKey: 'yup.yup.boolean.isValue',
        params
      };
    }
  },
  object: {
    noUnknown: (params) => {
      return {
        i18nKey: 'yup.yup.object.noUnknown',
        params: {
          ...params,
          unknown: params.value
        }
      };
    }
  },
  array: {
    min: (params) => {
      return {
        i18nKey: 'yup.yup.array.min',
        params
      };
    },
    max: (params) => {
      return {
        i18nKey: 'yup.yup.array.max',
        params
      };
    },
    length: (params) => {
      return {
        i18nKey: 'yup.yup.array.length',
        params
      };
    }
  },
  tuple: {
    notType: (params) => {
      return {
        i18nKey: 'yup.yup.tuple.notType',
        params
      };
    }
  }
};
export default localeObject;
