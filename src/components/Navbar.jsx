import React from 'react'
import { navigation } from '../../utils/data'
import { motion, useCycle } from 'framer-motion'

const Path = (props) => {
  return (
    <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='#1c1d20'
    strokeLinecap='round'
    {...props}
  />
  )
}

const MenuToggle = ({ toggle }) => (
  <button 
    onClick={toggle}
  >
    <svg 
      width='25' 
      height='25' 
      viewBox='0 0 20 20'>
      <Path
        variants={{
          closed: { 
            d: 'M 2 2.5 L 20 2.5' 
          },
          open: { 
            d: 'M 3 16.5 L 17 2.5' 
          }
        }}
      />
      <Path
        d='M 2 9.423 L 20 9.423'
        variants={{
          closed: { 
            opacity: 1 
          },
          open: { 
            opacity: 0
          }
        }}
        transition={{ 
          duration: 0.1 
        }}
      />
      <Path
        variants={{
          closed: { 
            d: 'M 2 16.346 L 20 16.346' 
          },
          open: { 
            d: 'M 3 2.5 L 17 16.346'
          }
        }}
      />
    </svg>
  </button>
)

const Navbar = () => {

  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <div className='flex justify-between items-center w-full py-5 font-poppins text-[#1c1d20]'>
      <div className='md:text-[48px] text-[36px] font-semibold'>David.</div>
      <ul className='list-none md:flex hidden justify-end items-center flex-1 space-x-16'>
        {navigation.map((link) => (
          <motion.li
            key={link.id}
            className='cursor-pointer text-[20px]'
            whileHover={{
              fontWeight: 700,
              scale: 1.2
            }}
          >
            <a href={`#${link.title.toLowerCase()}`}>
              {link.title}
            </a>
          </motion.li>
        ))}
      </ul>
      <div className='md:hidden flex flex-1 justify-end items-center'>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom='100%'
          className='button-shadow items-center flex justify-center rounded-full py-5 px-5'
        >
          <MenuToggle toggle={() => toggleOpen()}/>
        </motion.nav>
        <motion.div 
          className={`${isOpen ? 'flex' : 'hidden'} px-6 py-4 button-shadow absolute top-28 right-4 mx-4 rounded-xl`}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: {
              x: 0,
              y: 0,
              opacity: 1,
              transition: {
                type: 'tween',
                delay: 0.2,
                duration: 1,
                ease: 'easeOut'
              }
            },
            closed: {
              opacity: 0,
              y: 50          
            }
          }}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1 space-y-2'>
            {navigation.map((link) => (
              <li
                key={link.id}
                className='cursor-pointer text-[20px]'
              >
                <a href={`#${link.title.toLowerCase()}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar
