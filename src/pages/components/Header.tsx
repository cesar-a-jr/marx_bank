import styles from "@/styles/Header.module.css";
import Image from "next/image";

import * as HoverCard from '@radix-ui/react-hover-card';

import logo from "../../../public/favicon.ico";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Image src={logo} alt="" />
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <button className={styles.Button} aria-label="Customise options">
                MarxBank
              </button>
            </HoverCard.Trigger>

            <HoverCard.Portal>
              <HoverCard.Content
                className={styles.DropdownMenuContent}
                sideOffset={5}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                <HoverCard.Content className={styles.DropdownMenuItem}>
                  <button>Newsletter</button> 
                </HoverCard.Content>
                <HoverCard.Content className={styles.DropdownMenuItem}>
                  <button>Blog4</button> 
                </HoverCard.Content>
                </div>
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
        </div>
        <button></button>
      </nav>
    </header>
  );
}
