export const getDirection = () => 'LR';
export const getCommits = () => {
  return {
    '0000001': {
      id: '0000001',
      seq: 1,
      message: '',
      branch: 'master',
      parents: null,
      tag: 'v0.1',
      commitType: 'normal',
      note: null,
    },
    '0000002': {
      id: '0000002',
      seq: 2,
      message: '',
      branch: 'develop',
      parents: ['0000001'],
      tag: null,
      commitType: 'normal',
      note: null,
    },
    '0000003': {
      id: '0000003',
      seq: 3,
      message: '',
      branch: 'featureB',
      parents: ['0000002'],
      tag: null,
      commitType: 'normal',
      note: null,
    },
    '0000004': {
      id: '0000004',
      seq: 4,
      message: '',
      branch: 'hotfix',
      parents: ['0000001'],
      tag: null,
      commitType: 'normal',
      note: null,
    },
    '0000005': {
      id: '0000005',
      seq: 5,
      message: '',
      branch: 'develop',
      parents: ['0000002'],
      tag: null,
      commitType: 'normal',
      note: null,
    },
    '0000006': {
      id: '0000006',
      seq: 6,
      message: '',
      branch: 'featureB',
      parents: ['0000003'],
      tag: null,
      commitType: 'normal',
      note: null,
    },
    '0000007': {
      id: '0000007',
      seq: 7,
      message: '',
      branch: 'master',
      parents: ['0000004'],
      tag: 'v0.2',
      commitType: 'normal',
      note: null,
    },
    '0000008': {
      id: '0000008',
      seq: 8,
      message: '',
      branch: 'featureB',
      parents: ['0000006'],
      tag: null,
      commitType: 'normal',
      note: null,
    },
    '0000009': {
      id: '0000009',
      seq: 9,
      message: '',
      branch: 'featureA',
      parents: ['0000005'],
      tag: null,
      commitType: 'normal',
      note: null,
    },
    '0000010': {
      id: '0000010',
      seq: 10,
      message: '',
      branch: 'develop',
      parents: ['0000004', '0000005'],
      tag: null,
      commitType: 'normal',
      note: null,
    },
    '0000011': {
      id: '0000011',
      seq: 11,
      message: '',
      branch: 'featureA',
      parents: ['0000009'],
      tag: null,
      commitType: 'normal',
      note: '',
    },
    '0000012': {
      id: '0000012',
      seq: 12,
      message: '',
      branch: 'featureB',
      parents: ['0000008'],
      tag: null,
      commitType: 'normal',
      note: null,
    },
    '0000013': {
      id: '0000013',
      seq: 13,
      message: '',
      branch: 'develop',
      parents: ['0000010', '0000011'],
      tag: null,
      commitType: 'normal',
      note: null,
    },
    '0000014': {
      id: '0000014',
      seq: 14,
      message: '',
      branch: 'release',
      parents: ['0000013'],
      tag: null,
      commitType: 'normal',
      note: null,
    },
    '0000015': {
      id: '0000015',
      seq: 15,
      message: '',
      branch: 'master',
      parents: ['0000007'],
      tag: null,
      commitType: 'normal',
      note: null,
    },
    '0000016': {
      id: '0000016',
      seq: 16,
      message: '',
      branch: 'release',
      parents: ['0000014', '0000015'],
      tag: 'v1.0',
      commitType: 'normal',
      note: null,
    },
    '0000017': {
      id: '0000017',
      seq: 17,
      message: '',
      branch: 'develop',
      parents: ['0000013', '0000016'],
      tag: null,
      commitType: 'normal',
      note: null,
    },
  };
};
export const clear = () => {};
export const getBranchesAsObjArray = () => [
  {
    name: 'master',
  },
  {
    name: 'hotfix',
  },
  {
    name: 'release',
  },
  {
    name: 'develop',
  },
  {
    name: 'featureA',
  },
  {
    name: 'featureB',
  },
];