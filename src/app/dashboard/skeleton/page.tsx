import Image from 'next/image';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return '123456789'.split(''); // ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
};

export default async function SkeletonPage() {
  const data = getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {(await data).map((item) => (
        <Card key={item}>
          <CardHeader className="flex-row">
            <Image
              src="https://github.com/shadcn.png"
              alt="Shadcn"
              width={40}
              height={40}
              className="rounded-full mr-2 w-10 h-10"
            />
            <div>
              <CardTitle>
                Nostrud do Lorem id dolore dolore ullamco officia.
              </CardTitle>
              <CardDescription>
                Eiusmod laborum labore nostrud eu velit sit nulla nisi ea. Et
                veniam eiusmod quis laboris consequat exercitation adipisicing
                est cupidatat irure consectetur. Cillum culpa sint non Lorem
                dolor occaecat laborum ea id non reprehenderit ea.
              </CardDescription>
            </div>
          </CardHeader>

          <CardFooter className="flex justify-end">
            <Button>Más</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
