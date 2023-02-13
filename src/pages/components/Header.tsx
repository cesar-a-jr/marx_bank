import styles from "@/styles/Header.module.css";
import Image from "next/image";

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import logo from "../../../public/favicon.ico";
import { User } from "phosphor-react";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.aling}>
          <Image src={logo} alt="" />
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className={styles.Button} aria-label="Customise options">
                MarxBank
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className={styles.DropdownMenuContent}
              >
                <DropdownMenu.Item  className={styles.DropdownMenuItem}>
                 Newsletter
                </DropdownMenu.Item >
                <DropdownMenu.Item  className={styles.DropdownMenuItem}>
                  Blog
                </DropdownMenu.Item >
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className={styles.Button} aria-label="Customise options">
                Conta Digital
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className={styles.DropdownMenuContent}
              >
                <DropdownMenu.Item  className={styles.DropdownMenuItem}>
                 Criar sua Conta
                </DropdownMenu.Item >
                <DropdownMenu.Item  className={styles.DropdownMenuItem}>
                  Taxas
                </DropdownMenu.Item >
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
        <button className={styles.login}>Login <User size={24} /></button>
      </nav>
    </header>
  );
}
