import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Modal({ children, icon }: any) {
  return (
    <Dialog>
      <DialogTrigger>{icon}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Faça login</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
