import React from 'react';
import { Document, Page, View, Image } from '../src';
import MockDate from 'mockdate';
import render from './testRenderer';

const imageUrl =
  'https://user-images.githubusercontent.com/5600341/27065042-31afea66-4fd1-11e7-9e7f-6f192bb351f6.jpg';

describe('<Image />', () => {
  beforeEach(() => {
    MockDate.set(1434319925275);
  });

  const matchSnapshot = (doc, done) =>
    render(<Document>{doc}</Document>).then(result => {
      expect(result).toMatchSnapshot();
      done();
    });

  test('Should render just a image', done => {
    matchSnapshot(
      <Page>
        <Image src={imageUrl} />
      </Page>,
      done,
    );
  });

  test('Should render an image below another', done => {
    matchSnapshot(
      <Page>
        <Image src={imageUrl} />
        <Image src={imageUrl} />
      </Page>,
      done,
    );
  });

  test('Should render an image with fixed width', done => {
    matchSnapshot(
      <Page>
        <Image src={imageUrl} style={{ width: 300 }} />
      </Page>,
      done,
    );
  });

  test('Should render an image with fixed height', done => {
    matchSnapshot(
      <Page>
        <Image src={imageUrl} style={{ height: 300 }} />
      </Page>,
      done,
    );
  });

  test('Should render images with flex 1, within flexDirection column', done => {
    matchSnapshot(
      <Page style={{ flexDirection: 'column' }}>
        <Image src={imageUrl} style={{ flex: 1 }} />
        <Image src={imageUrl} style={{ flex: 1 }} />
      </Page>,
      done,
    );
  });

  test('Should render images with flex 1, within flexDirection row', done => {
    matchSnapshot(
      <Page style={{ flexDirection: 'row' }}>
        <Image src={imageUrl} style={{ flex: 1 }} />
        <Image src={imageUrl} style={{ flex: 1 }} />
      </Page>,
      done,
    );
  });

  test('Should render image and view with flex 1, within flexDirection column', done => {
    matchSnapshot(
      <Page style={{ flexDirection: 'column' }}>
        <Image src={imageUrl} style={{ flex: 1 }} />
        <View style={{ flex: 1, backgroundColor: 'red' }} />
      </Page>,
      done,
    );
  });

  test('Should render image and view with flex 1, within flexDirection row', done => {
    matchSnapshot(
      <Page style={{ flexDirection: 'row' }}>
        <Image src={imageUrl} style={{ flex: 1 }} />
        <View style={{ flex: 1, backgroundColor: 'red' }} />
      </Page>,
      done,
    );
  });

  test('Should render images with flex 1, within flexDirection column and fixed height', done => {
    matchSnapshot(
      <Page>
        <View style={{ flexDirection: 'column', height: 500 }}>
          <Image src={imageUrl} style={{ flex: 1 }} />
          <Image src={imageUrl} style={{ flex: 1 }} />
        </View>
      </Page>,
      done,
    );
  });

  test('Should render images with flex 1, within flexDirection row and fixed width', done => {
    matchSnapshot(
      <Page style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', width: 300 }}>
          <Image src={imageUrl} style={{ flex: 1 }} />
          <Image src={imageUrl} style={{ flex: 1 }} />
        </View>
      </Page>,
      done,
    );
  });

  test('Should render image and view with flex 1, within flexDirection column and fixed height', done => {
    matchSnapshot(
      <Page>
        <View style={{ flexDirection: 'column', height: 500 }}>
          <Image src={imageUrl} style={{ flex: 1 }} />
          <View style={{ flex: 1, backgroundColor: 'red' }} />
        </View>
      </Page>,
      done,
    );
  });

  test('Should render image and view with flex 1, within flexDirection row and fixed width', done => {
    matchSnapshot(
      <Page style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', width: 300 }}>
          <Image src={imageUrl} style={{ flex: 1 }} />
          <View style={{ flex: 1, backgroundColor: 'red' }} />
        </View>
      </Page>,
      done,
    );
  });
});
