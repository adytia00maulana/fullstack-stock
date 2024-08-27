import React, {useState} from 'react';
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

interface Props {
  imageUrl: string;
  url: string;
  title: string;
  category: string;
  description: string;
  id: number;
}

const product = {
  name: 'Basic Tee 6-Pack ',
  price: '$192',
  rating: 3.9,
  reviewCount: 117,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const AwesomeLink: React.FC<Props> = ({
  imageUrl,
  url,
  title,
  category,
  description,
  id,
}) => {
  const [openProduct, setOpenProduct] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div key={id} className="shadow  max-w-md  rounded">
      <img src={imageUrl}  alt={""} onClick={() => setOpenProduct(true)}/>
      <div className="p-5 flex flex-col space-y-2">
        <p className="text-sm text-blue-500">{category}</p>
        <p className="text-lg font-medium">{title}</p>
        <p className="text-gray-600">{description}</p>
        <a href={url} className="flex hover:text-blue-500">
          {/* removes https from url */}
          {url.replace(/(^\w+:|^)\/\//, '')}
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </svg>
        </a>
      </div>


      <Dialog open={openProduct} onClose={setOpenProduct} className="relative z-10">
        <DialogBackdrop
            transition
            className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <DialogPanel
                transition
                className="flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl"
            >
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                    type="button"
                    onClick={() => setOpenProduct(false)}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                    <img alt={product.imageAlt} src={product.imageSrc} className="object-cover object-center" />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

                    <section aria-labelledby="information-heading" className="mt-2">
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <p className="text-2xl text-gray-900">{product.price}</p>

                      {/* Reviews */}
                      <div className="mt-6">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                    key={rating}
                                    aria-hidden="true"
                                    className={classNames(
                                        product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                        'h-5 w-5 flex-shrink-0',
                                    )}
                                />
                            ))}
                          </div>
                          <p className="sr-only">{product.rating} out of 5 stars</p>
                          <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {product.reviewCount} reviews
                          </a>
                        </div>
                      </div>
                    </section>

                    <section aria-labelledby="options-heading" className="mt-10">
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <form>
                        {/* Colors */}
                        <fieldset aria-label="Choose a color">
                          <legend className="text-sm font-medium text-gray-900">Color</legend>

                          <RadioGroup
                              value={selectedColor}
                              onChange={setSelectedColor}
                              className="mt-4 flex items-center space-x-3"
                          >
                            {product.colors.map((color) => (
                                <Radio
                                    key={color.name}
                                    value={color}
                                    aria-label={color.name}
                                    className={classNames(
                                        color.selectedClass,
                                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                                    )}
                                >
                              <span
                                  aria-hidden="true"
                                  className={classNames(
                                      color.class,
                                      'h-8 w-8 rounded-full border border-black border-opacity-10',
                                  )}
                              />
                                </Radio>
                            ))}
                          </RadioGroup>
                        </fieldset>

                        {/* Sizes */}
                        <fieldset aria-label="Choose a size" className="mt-10">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-gray-900">Size</div>
                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              Size guide
                            </a>
                          </div>

                          <RadioGroup
                              value={selectedSize}
                              onChange={setSelectedSize}
                              className="mt-4 grid grid-cols-4 gap-4"
                          >
                            {product.sizes.map((size) => (
                                <Radio
                                    key={size.name}
                                    value={size}
                                    disabled={!size.inStock}
                                    className={classNames(
                                        size.inStock
                                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                        'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1',
                                    )}
                                >
                                  <span>{size.name}</span>
                                  {size.inStock ? (
                                      <span
                                          aria-hidden="true"
                                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                                      />
                                  ) : (
                                      <span
                                          aria-hidden="true"
                                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                      >
                                  <svg
                                      stroke="currentColor"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  >
                                    <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                                  </svg>
                                </span>
                                  )}
                                </Radio>
                            ))}
                          </RadioGroup>
                        </fieldset>

                        <button
                            type="submit"
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Add to bag
                        </button>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
